
const express = require('express')
import {handler1958} from "./handler1958";
const app = express()
app.get('/1958', handler1958)
app.listen(3000, () => {})
        