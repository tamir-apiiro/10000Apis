
const express = require('express')
import {handler4902} from "./handler4902";
const app = express()
app.get('/4902', handler4902)
app.listen(3000, () => {})
        