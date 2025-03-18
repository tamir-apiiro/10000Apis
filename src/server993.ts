
const express = require('express')
import {handler993} from "./handler993";
const app = express()
app.get('/993', handler993)
app.listen(3000, () => {})
        