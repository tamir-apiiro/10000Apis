
const express = require('express')
import {handler1940} from "./handler1940";
const app = express()
app.get('/1940', handler1940)
app.listen(3000, () => {})
        