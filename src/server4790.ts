
const express = require('express')
import {handler4790} from "./handler4790";
const app = express()
app.get('/4790', handler4790)
app.listen(3000, () => {})
        