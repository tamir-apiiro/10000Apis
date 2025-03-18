
const express = require('express')
import {handler1933} from "./handler1933";
const app = express()
app.get('/1933', handler1933)
app.listen(3000, () => {})
        