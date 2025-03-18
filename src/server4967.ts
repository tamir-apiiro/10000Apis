
const express = require('express')
import {handler4967} from "./handler4967";
const app = express()
app.get('/4967', handler4967)
app.listen(3000, () => {})
        