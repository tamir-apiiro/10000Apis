
const express = require('express')
import {handler1668} from "./handler1668";
const app = express()
app.get('/1668', handler1668)
app.listen(3000, () => {})
        