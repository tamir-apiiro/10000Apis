
const express = require('express')
import {handler1974} from "./handler1974";
const app = express()
app.get('/1974', handler1974)
app.listen(3000, () => {})
        