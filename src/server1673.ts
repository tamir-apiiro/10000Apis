
const express = require('express')
import {handler1673} from "./handler1673";
const app = express()
app.get('/1673', handler1673)
app.listen(3000, () => {})
        