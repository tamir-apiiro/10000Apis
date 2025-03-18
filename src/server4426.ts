
const express = require('express')
import {handler4426} from "./handler4426";
const app = express()
app.get('/4426', handler4426)
app.listen(3000, () => {})
        