
const express = require('express')
import {handler1993} from "./handler1993";
const app = express()
app.get('/1993', handler1993)
app.listen(3000, () => {})
        