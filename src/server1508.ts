
const express = require('express')
import {handler1508} from "./handler1508";
const app = express()
app.get('/1508', handler1508)
app.listen(3000, () => {})
        