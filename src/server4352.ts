
const express = require('express')
import {handler4352} from "./handler4352";
const app = express()
app.get('/4352', handler4352)
app.listen(3000, () => {})
        