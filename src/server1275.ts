
const express = require('express')
import {handler1275} from "./handler1275";
const app = express()
app.get('/1275', handler1275)
app.listen(3000, () => {})
        