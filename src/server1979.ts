
const express = require('express')
import {handler1979} from "./handler1979";
const app = express()
app.get('/1979', handler1979)
app.listen(3000, () => {})
        