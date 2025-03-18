
const express = require('express')
import {handler1437} from "./handler1437";
const app = express()
app.get('/1437', handler1437)
app.listen(3000, () => {})
        