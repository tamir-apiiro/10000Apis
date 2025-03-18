
const express = require('express')
import {handler1340} from "./handler1340";
const app = express()
app.get('/1340', handler1340)
app.listen(3000, () => {})
        