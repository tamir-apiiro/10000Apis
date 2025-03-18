
const express = require('express')
import {handler778} from "./handler778";
const app = express()
app.get('/778', handler778)
app.listen(3000, () => {})
        