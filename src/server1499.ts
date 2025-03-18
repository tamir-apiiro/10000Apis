
const express = require('express')
import {handler1499} from "./handler1499";
const app = express()
app.get('/1499', handler1499)
app.listen(3000, () => {})
        