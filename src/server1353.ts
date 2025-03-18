
const express = require('express')
import {handler1353} from "./handler1353";
const app = express()
app.get('/1353', handler1353)
app.listen(3000, () => {})
        