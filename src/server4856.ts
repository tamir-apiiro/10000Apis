
const express = require('express')
import {handler4856} from "./handler4856";
const app = express()
app.get('/4856', handler4856)
app.listen(3000, () => {})
        