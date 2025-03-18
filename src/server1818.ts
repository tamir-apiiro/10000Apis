
const express = require('express')
import {handler1818} from "./handler1818";
const app = express()
app.get('/1818', handler1818)
app.listen(3000, () => {})
        