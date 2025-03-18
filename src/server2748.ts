
const express = require('express')
import {handler2748} from "./handler2748";
const app = express()
app.get('/2748', handler2748)
app.listen(3000, () => {})
        