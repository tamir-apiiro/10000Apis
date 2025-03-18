
const express = require('express')
import {handler4652} from "./handler4652";
const app = express()
app.get('/4652', handler4652)
app.listen(3000, () => {})
        