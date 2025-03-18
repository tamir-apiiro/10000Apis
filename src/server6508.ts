
const express = require('express')
import {handler6508} from "./handler6508";
const app = express()
app.get('/6508', handler6508)
app.listen(3000, () => {})
        