
const express = require('express')
import {handler4746} from "./handler4746";
const app = express()
app.get('/4746', handler4746)
app.listen(3000, () => {})
        