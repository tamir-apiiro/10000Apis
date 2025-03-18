
const express = require('express')
import {handler1648} from "./handler1648";
const app = express()
app.get('/1648', handler1648)
app.listen(3000, () => {})
        