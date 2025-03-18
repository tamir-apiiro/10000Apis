
const express = require('express')
import {handler1579} from "./handler1579";
const app = express()
app.get('/1579', handler1579)
app.listen(3000, () => {})
        