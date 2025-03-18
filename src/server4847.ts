
const express = require('express')
import {handler4847} from "./handler4847";
const app = express()
app.get('/4847', handler4847)
app.listen(3000, () => {})
        