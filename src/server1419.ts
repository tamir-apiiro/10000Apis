
const express = require('express')
import {handler1419} from "./handler1419";
const app = express()
app.get('/1419', handler1419)
app.listen(3000, () => {})
        