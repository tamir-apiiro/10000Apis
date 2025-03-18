
const express = require('express')
import {handler1588} from "./handler1588";
const app = express()
app.get('/1588', handler1588)
app.listen(3000, () => {})
        