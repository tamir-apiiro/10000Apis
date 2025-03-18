
const express = require('express')
import {handler4910} from "./handler4910";
const app = express()
app.get('/4910', handler4910)
app.listen(3000, () => {})
        