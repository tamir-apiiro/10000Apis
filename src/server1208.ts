
const express = require('express')
import {handler1208} from "./handler1208";
const app = express()
app.get('/1208', handler1208)
app.listen(3000, () => {})
        