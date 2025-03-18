
const express = require('express')
import {handler1983} from "./handler1983";
const app = express()
app.get('/1983', handler1983)
app.listen(3000, () => {})
        