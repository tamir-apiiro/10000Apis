
const express = require('express')
import {handler508} from "./handler508";
const app = express()
app.get('/508', handler508)
app.listen(3000, () => {})
        