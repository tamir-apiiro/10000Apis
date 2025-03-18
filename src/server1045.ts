
const express = require('express')
import {handler1045} from "./handler1045";
const app = express()
app.get('/1045', handler1045)
app.listen(3000, () => {})
        