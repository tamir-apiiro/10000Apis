
const express = require('express')
import {handler1299} from "./handler1299";
const app = express()
app.get('/1299', handler1299)
app.listen(3000, () => {})
        