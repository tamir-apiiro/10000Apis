
const express = require('express')
import {handler4748} from "./handler4748";
const app = express()
app.get('/4748', handler4748)
app.listen(3000, () => {})
        