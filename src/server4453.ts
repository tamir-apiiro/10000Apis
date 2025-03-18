
const express = require('express')
import {handler4453} from "./handler4453";
const app = express()
app.get('/4453', handler4453)
app.listen(3000, () => {})
        