
const express = require('express')
import {handler1954} from "./handler1954";
const app = express()
app.get('/1954', handler1954)
app.listen(3000, () => {})
        