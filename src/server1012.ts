
const express = require('express')
import {handler1012} from "./handler1012";
const app = express()
app.get('/1012', handler1012)
app.listen(3000, () => {})
        