
const express = require('express')
import {handler1789} from "./handler1789";
const app = express()
app.get('/1789', handler1789)
app.listen(3000, () => {})
        