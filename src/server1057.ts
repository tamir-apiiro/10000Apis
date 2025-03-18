
const express = require('express')
import {handler1057} from "./handler1057";
const app = express()
app.get('/1057', handler1057)
app.listen(3000, () => {})
        