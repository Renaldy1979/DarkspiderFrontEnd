import React, { ReactNode, Dispatch } from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';

interface ModalProps {
  title?: string;
  open: boolean;
  onCloseModal: Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  maxWidth?: DialogProps['maxWidth'];
}

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: ReactNode;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      minWidth: 300,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function Modal({
  open,
  onCloseModal,
  children,
  title,
  maxWidth,
}: ModalProps) {
  const handleClose = () => {
    onCloseModal(false);
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={maxWidth}
      >
        <DialogTitle id="customized-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
