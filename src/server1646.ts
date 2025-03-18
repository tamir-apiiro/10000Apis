
const express = require('express')
import {handler1646} from "./handler1646";
const app = express()
app.get('/1646', handler1646)
app.listen(3000, () => {})
        