
const express = require('express')
import {handler1922} from "./handler1922";
const app = express()
app.get('/1922', handler1922)
app.listen(3000, () => {})
        