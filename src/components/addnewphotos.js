import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from 'firebase';

// this component will redirect to the form for adding photos to their adventure  