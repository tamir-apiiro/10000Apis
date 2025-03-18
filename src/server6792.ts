
const express = require('express')
import {handler6792} from "./handler6792";
const app = express()
app.get('/6792', handler6792)
app.listen(3000, () => {})
        