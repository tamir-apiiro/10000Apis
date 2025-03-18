
const express = require('express')
import {handler1372} from "./handler1372";
const app = express()
app.get('/1372', handler1372)
app.listen(3000, () => {})
        