
const express = require('express')
import {handler4336} from "./handler4336";
const app = express()
app.get('/4336', handler4336)
app.listen(3000, () => {})
        