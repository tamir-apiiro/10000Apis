
const express = require('express')
import {handler4341} from "./handler4341";
const app = express()
app.get('/4341', handler4341)
app.listen(3000, () => {})
        