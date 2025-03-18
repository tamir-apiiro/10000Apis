
const express = require('express')
import {handler1006} from "./handler1006";
const app = express()
app.get('/1006', handler1006)
app.listen(3000, () => {})
        